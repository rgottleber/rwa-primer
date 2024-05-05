const { ethers } = await import("npm:ethers@6.10.0"); // Import ethers.js v6.10.0

const abiCoder = ethers.AbiCoder.defaultAbiCoder();

const apiResponse = await Functions.makeHttpRequest({
    url: `https://api.bridgedataoutput.com/api/v2/OData/test/Property('P_5dba1fb94aa4055b9f29696f')?access_token=6baca547742c6f96a6ff71b138424f21`,
});

const listPrice = Number(apiResponse.data.ListPrice);
const originalListPrice = Number(apiResponse.data.OriginalListPrice);
const taxAssessedValue = Number(apiResponse.data.TaxAssessedValue);

const encoded = abiCoder.encode(["uint256", "uint256", "uint256"], [listPrice, originalListPrice, taxAssessedValue]);

return ethers.getBytes(encoded);
