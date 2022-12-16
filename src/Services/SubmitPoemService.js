// import {submitAppEndpoint} from "../../utils/constants/EndPoint";
//
// export function submitApplication(customerData, appConfig) {
//     const submitAppData = mapForSubmit(customerData);
//     const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(submitAppData),
//     };
//     const submitUrl = appConfig.exrServiceApi + submitAppEndpoint;
//     return fetch(submitUrl, requestOptions)
//         .then((response) => response.json())
//         .catch((response) => response.json());
// }
//
// function mapForSubmit(customerData) {
//     return {
//         firstName: customerData.firstName.value,
//         lastName: customerData.lastName.value,
//         dateOfBirth: new Date(
//             +customerData.dateOfBirth.year.value,
//             customerData.dateOfBirth.month.value - 1,
//             +customerData.dateOfBirth.day.value
//         ),
//         homeAddress: {
//             streetAddress: customerData.streetAddress.value,
//             city: customerData.city.value,
//             state: customerData.state.value,
//             postalCode: customerData.postalCode.value,
//         },
//         income: parseFloat(customerData.income.value),
//         email: customerData.email.value,
//     };
// }
