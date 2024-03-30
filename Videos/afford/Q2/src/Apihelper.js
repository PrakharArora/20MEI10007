import React from "react";
import axios from "axios";

export const allLaptopData = async (companyName,categoryName,top,minPrice,maxPrice) => {
  try {
    const accessToken =
      "eyJhbGci0iJIUzI1NiIsInR5cC161kpXVC39.eyJNYXBDbpbXMiOnsiZXhwIjoxNzEwODM1MjY8LC3pYXQIOJE3MTA4MzQ5NjgsImlzcyI6IkFmZm9yZG1lZCIsImp@a5I6IjH3YmI0OTNjLTczZDMtNDd1YS04Njc1LTIxZjV2ZWY5YjczNSIsInN1YiI6InJhaHVsQGF1Yy512HUifSwiY29tcGFueU5hbWUiOiInb@1hcnQiLCJjbGllbnRJDCI6IjM3YmI0OTNjLTczZDMtNDd1V504Njc1LTIxZjY2ZWV5YjczNSIsImNsaWVudFN1Y331dCI6Ikhw5VFCVm3xbVRHRW1hRUQiLCJvd251ck5hbWULDLJSYWh1bCIsIm93bmVyRwthai@w101JyYWh1bEBhYmluZR1Iiwicm@sbE5vIjoiM579.gmk2F73GZ7q7EaIGDShc4oDKK1zWQ9Up 3xQ-4Dbsu8A";
    const url = `http://20.244.56.144/test/companies/${companyName}/categories/${categoryName}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTop10sold = async () => {
  try {
    const accessToken =
      "eyJhbGci0iJIUzI1NiIsInR5cC161kpXVC39.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEwODM1MjY4LC3pYXQIOJE3MTA4MzQ5NjgsImlzcyI6IkFmZm9yZG1lZCIsImp@a5I6IjH3YmI0OTNjLTczZDMtNDd1YS04Njc1LTIxZjV2ZWY5YjczNSIsInN1YiI6InJhaHVsQGF1Yy512HUifSwiY29tcGFueU5hbWUiOiInb@1hcnQiLCJjbGllbnRJRCI6IjM3YmI0OTNjLTczZDMtNDd1V504Njc1LTIxZjY2ZWV5YjczNSIsImNsaWVudFN1Y331dCI6Ikhw5VFCVm3xbVRHRW1hRUQiLCJvd251ck5hbWULDLJSYWh1bCIsIm93bmVyRwthai@w101JyYWh1bEBhYmluZR1Iiwicm@sbE5vIjoiM579.gmk2F73GZ7q7EaIGDShc4oDKK1zWQ9Up 3xQ-4Dbsu8A";
    const url = `http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
