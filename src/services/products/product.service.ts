import { homePageProducts } from "@/utils/app.utils";
import { API_HOST } from "../../../app.config";
import { ApiService } from "../api.service";

export const getHomePageProducts = async () => {
    try {
        const references = Object.values(homePageProducts)
        let productsId = homePageProducts;

        const result = await ApiService.GetRequest(`${API_HOST}/v1/product?productKey=${references}`);

        productsId.LFI_ONE_Smartphone = result?.data?.data.find((x:any) => x.productKey == productsId?.LFI_ONE_Smartphone)?._id ?? productsId?.LFI_ONE_Smartphone;
        productsId.LYO_Watch = result?.data?.data.find((x:any) => x.productKey == productsId?.LYO_Watch)?._id ?? productsId?.LYO_Watch;
        productsId.LYO_Tab = result?.data?.data.find((x:any) => x.productKey == productsId?.LYO_Tab)?._id ?? productsId?.LYO_Tab;

        return productsId;
    } catch (error: any) {
        console.log("🚀 ~ file: product.service.ts:18 ~ getHomePageProducts ~ error:", error)
        return null;
    }
}