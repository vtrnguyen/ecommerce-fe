import axios from "../axios";

const handleCreateNewCategory = (newCategoryInfor) => {
    return axios.post("/category/create-category", newCategoryInfor);
}

const handleGetAllCategory = () => {
    return axios.get("/category/get-all-categories");
}

const handleDeleteCategory = (categoryID) => {
    return axios.delete("/category/delete-category", {
        params: {
            id: categoryID
        }
    });
}

const handleUpdateCategory = (updateInfor) => {
    return axios.put("/category/update-category", updateInfor);
}

const handleGetCategoryInfor = (categoryID) => {
    return axios.get(`/category/get-category-infor/?id=${categoryID}`);
}

export {
    handleCreateNewCategory, 
    handleGetAllCategory,
    handleDeleteCategory,
    handleUpdateCategory,
    handleGetCategoryInfor,
}
