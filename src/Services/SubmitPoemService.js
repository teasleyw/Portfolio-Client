import {submitPoemEndpoint} from "../utils/constants.js";

export function submitPoemService(customerData) {
    const submitAppData = mapForSubmit(customerData);
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitAppData),
    };
    const submitUrl = "http://localhost:8080" + submitPoemEndpoint;
    return fetch(submitUrl, requestOptions)
        .then((response) => console.log(response))
        .catch(() => console.log("error"));
}

function mapForSubmit(customerData) {
    return {
        firstName: customerData?.firstName?.value,
        lastName: customerData?.lastName?.value,
        poemTitle: customerData.poemTitle.value,
        email: customerData?.email?.value,
        poem: customerData?.poemContent?.value
    };
}
