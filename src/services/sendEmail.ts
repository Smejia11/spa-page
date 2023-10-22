import { getValidationError } from "@/utils/getValidationError";
import { SnackbarUtilities } from "@/utils/snackbarManager";

type EmailData = {
    [k: string]: FormDataEntryValue;
}


export const sendEmail = async (dataEmail: EmailData) => {
    try {
        const endpoint = "/api/send";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataEmail),

        };
        const response = await fetch(endpoint, options);
        if (!response.ok) {
            // Handle non-successful HTTP responses (e.g., 4xx or 5xx errors)
            const errorCode = `ERR_${response.status}`;
            const errorMessage = response.statusText;
            SnackbarUtilities.error(getValidationError(errorCode))
        }
        const resData = await response.json();
        SnackbarUtilities.success("Se ha enviado el correo exitosamente!")
    } catch (error) {
        throw new Error(`HTTP Error: ${error}`);
    }

}