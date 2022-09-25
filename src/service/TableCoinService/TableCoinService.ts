import axios from "axios";
import { DataTypes } from "./types";


const your = 'coinranking246647e1777b3104047c470614c6fe20adddb1e38daba649';

const dataListCoin = async (): Promise<DataTypes> => {
    const response = await axios.get(
        ' coins',
        {headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-type": "Application/json",
                "Authorization": `Bearer ${your}`
                }   
            }
      )
      .then((response) => {
          return response.data;
        },
        (error) => {
          console.log('object');
        }
      );
      return response
}

export default dataListCoin;
// headers : {
//     'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
//     https://api.coinranking.com/v2/coins
// }