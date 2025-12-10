import { fetchBaseQuery, type BaseQueryApi, type FetchArgs } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice";
import { toast } from "react-toastify";
import { isServerError, isValidationError } from "../../features/middleware/Validation";
import { router } from "../routes/Routes";

const customBaseQuery = fetchBaseQuery({baseUrl: `http://localhost:3050/api`});

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));

export const baseQueryWithErrorHandling = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
    api.dispatch(startLoading());
    await sleep();
    const result = await customBaseQuery(args, api, extraOptions);

    api.dispatch(stopLoading());
    if (result.error) {
        const {status, data} = result.error;
        console.log("this is the type .....", result.error);
        switch(status) {
           
            case 400: {
        if (isValidationError(data)) {
          
          const messages = Object.values(data.errors).flat();
          messages.forEach(msg => toast.error(msg));
        } else {
          toast.error(data as string);
        }
        break;
      }
           
            case 401:
                console.error('Unauthorized - Please log in.');
                toast.error((data as { title: string }).title );
                break;
            case 404:
                console.error('Not Found - The requested resource could not be found.');
                toast.error((data as {title: string}).title);
                break;

            case 500:
    //           if (isServerError(data)) {
    //     toast.error(data.title); 
    // } else {
    //     toast.error("Server error occurred");
    // }
            if(typeof data === "object" ) 
                router.navigate('/server-error', {state: {error: data}});
            break;
} 

       return {
      error: {
        status,
        data
      }
    };
    }
    return result;
}