import apiClient from "./API"; // Ensure correct import

export const fetchProfiles = async (
  profileId: string,
  pageNo?: number,
  perPage?: number,
  sortOrder?: string
): Promise<any> => {
  try {
    const response = await apiClient.post("/auth/Get_prof_list_match/", {
      profile_id: profileId,
      per_page: perPage,
      page_number: pageNo,
      order_by: sortOrder
    });
    if (response.data.Status !== 1) {
      throw new Error("Failed to fetch profiles");
    }
    return response.data; // Adjust based on the actual response structure
  } catch (error) {
    console.error("Error fetching profiles:", error);
    throw error;
  }
};

export const fetchProfilesDetails = async (profileId: string): Promise<any> => {
  try {
    const loginuser_profileId = sessionStorage.getItem("loginuser_profile_id");

    const response = await apiClient.post("/auth/Get_profile_det_match/", {
      profile_id: loginuser_profileId,
      user_profile_id: profileId, // Adjust as needed based on your API requirements
    });

    // if (response.data.Status !== 1) {
    //   throw new Error(`Failed to fetch profiles: ${response.data.message || 'Unknown error'}`);
    // }

    return response.data; // Adjust based on actual response structure
  } catch (error: any) {
    console.error(
      "Error fetching profiles:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const Update_photo_request =
  "http://103.214.132.20:8000/auth/Update_photo_request/";
export const Get_profile_det_match =
  "http://103.214.132.20:8000/auth/Get_profile_det_match/";
export const Get_photo_bypassword =
  "http://103.214.132.20:8000/auth/Get_photo_bypassword/";
export const Get_addon_packages =
  " http://103.214.132.20:8000/auth/Get_addon_packages/";
export const Save_plan_package =
  " http://103.214.132.20:8000/auth/Save_plan_package/";
export const update_photo_password =
  "http://103.214.132.20:8000/auth/Update_photo_password/";
export const photo_protection =
  "http://103.214.132.20:8000/auth/Get_photo_protection/";
export const Get_advance_search =
  "http://103.214.132.20:8000/auth/Get_advance_search/";
