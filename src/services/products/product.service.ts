import { homePageProducts } from "@/utils/app.utils";
import { API_HOST } from "../../../app.config";
import { ApiService } from "../api.service";

export const getHomePageProducts = async () => {
    try {
        const references = Object.values(homePageProducts)
        const tmp_homePageProducts = homePageProducts
        let productsId = tmp_homePageProducts;
        console.log("🚀 ~ file: product.service.ts:9 ~ getHomePageProducts ~ productsId:", productsId)

        const result = await ApiService.GetRequest(`${API_HOST}/v1/product?productKey=${references}`);

        console.log("🚀 ~ file: product.service.ts:12 ~ getHomePageProducts ~ result:", result?.data)
        productsId.LFI_ONE_Smartphone = result?.data?.data.find((x:any) => x.productKey === productsId?.LFI_ONE_Smartphone)?._id ?? "";
        productsId.LYO_Watch = result?.data?.data.find((x:any) => x.productKey === productsId?.LYO_Watch)?._id ?? "";
        productsId.LYO_Tab = result?.data?.data.find((x:any) => x.productKey === productsId?.LYO_Tab)?._id ?? "";
        console.log("🚀 ~ file: product.service.ts:18 ~ getHomePageProducts ~ productsId:", productsId)

        return productsId;
    } catch (error: any) {
        console.log("🚀 ~ file: product.service.ts:18 ~ getHomePageProducts ~ error:", error)
        return null;
    }
}