import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import dataListCoin from '../../service/TableCoinService/TableCoinService';
import { Coin } from '../../service/TableCoinService/types';
import down from '../../assets/arrow_down.png';
import up from '../../assets/arrow_up.png';


export const TableCoin = () => {
  const [datatables, setDatatablesCoins] = useState<Coin[]>([])
  const { data: dataListCoinValue, isLoading } = useQuery(
    ['getLeaderSectionData'],
    () => dataListCoin()
  );
  let copiedArr = [...datatables];
  useEffect(() => {
    setDatatablesCoins(dataListCoinValue?.data?.coins || [])
  }, [isLoading])
  const handleSortByMarketCapUp = () => {
    copiedArr.sort(function (a, b) {
      let keyA = Number(a.marketCap || 0),
        keyB = Number(b.marketCap || 0);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    }
    );
    setDatatablesCoins(copiedArr || [])
  }
  const handleSortByMarketCapDown = () => {
    copiedArr.sort(function (a, b) {
      let keyA = Number(a.marketCap || 0),
        keyB = Number(b.marketCap || 0);
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    }
    );
    setDatatablesCoins(copiedArr || [])
  }



  const handleSortByPriceUp = () => {
    copiedArr.sort(function (a, b) {
      let keyA = Number(a.price || 0),
        keyB = Number(b.price || 0);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    }
    );
    setDatatablesCoins(copiedArr || [])
  }

  const handleSortByPriceDown = () => {
    copiedArr.sort(function (a, b) {
      let keyA = Number(a.price || 0),
        keyB = Number(b.price || 0);
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    }
    );
    setDatatablesCoins(copiedArr || [])
  }




  const handleSortByChangeUp = () => {
    copiedArr.sort(function (a, b) {
      let keyA = Number(a.change || 0),
        keyB = Number(b.change || 0);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    }
    );
    setDatatablesCoins(copiedArr || [])
  }
  const handleSortByChangeDown = () => {
    copiedArr.sort(function (a, b) {
      let keyA = Number(a.change || 0),
        keyB = Number(b.change || 0);
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    }
    );
    setDatatablesCoins(copiedArr || [])
  }
  return (
    <div className='tab'>
      <table>

        <thead>
          <tr>
            <th >
              Name
            </th>
            <th>
              Symbol
            </th>
            <th>
              Logo
            </th>
            <th >
              Current Price
              <img alt='hihihih' src={up} onClick={handleSortByPriceDown} />
              <img alt='hihihih' src={down} onClick={handleSortByPriceUp} />
            </th>
            <th >
              total Market cap
              <img alt='hihihih' src={up} onClick={handleSortByMarketCapDown} />
              <img alt='hihihih' src={down} onClick={handleSortByMarketCapUp} />

            </th>
            <th>
              Price Change
              <img alt='hihihih' src={up} onClick={handleSortByChangeDown} />
              <img alt='hihihih' src={down} onClick={handleSortByChangeUp} />
            </th>
          </tr>

        </thead>
        <tbody>
          {datatables.map((coin, i) =>
            <>
              <tr onClick={()=> window.open(`${coin.coinrankingUrl}`, "_blank")} key={i}>
                <td>{coin.name}</td>
                <td>{coin.symbol}</td>
                <td>
                  <img src={coin.iconUrl} alt={coin.name} width={50} />
                </td>
                <td>{coin.price}</td>
                <td>{coin.marketCap}</td>
                <td>{coin.change}</td>
              </tr>
            </>
          )}
        </tbody>

      </table>
    </div>
  )
}
