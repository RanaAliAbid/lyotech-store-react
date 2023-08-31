const voucherCodeGenerator = require('voucher-code-generator');
const { generateApiKey } = require('generate-api-key');

export const generateVoucherCode = () => {
  let generateCode = voucherCodeGenerator.generate({
    prefix: 'CP-',
    length: 8,
    count: 1,
    pattern: '####-####',
  });

  const token = generateApiKey({
    method: 'uuidv4',
    dashes: false,
  });

  return { code: generateCode[0].toUpperCase(), token: token.toUpperCase() };
};
