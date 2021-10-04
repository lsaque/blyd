import React, { useEffect, useState } from "react";
import { StatusBar, View, PermissionsAndroid } from "react-native";
import { BackgroundImage } from "../../../styles";
import * as NetInfo from '@react-native-community/netinfo';
import WifiManager, { WifiEntry } from "react-native-wifi-reborn";

import Logo from "../../assets/Admin/logo.png";

import { 
  Container,
  AdminHeader,
  WelcomeContainer,
  HeaderTitle,
  Description,
  Image,
  Content,
  DivisorCategory,
  GridPhotos,
  Credits,
  ImageCredits
} from "./styles";

import AdminImage from '../../assets/Admin/admin.png';
import Background from '../../assets/Admin/background.png';
import AdminDataNumber from "../../components/AdminDataNumber";
import { ScrollView } from "react-native-gesture-handler";
import AdminTitle from "../../components/AdminTitle";
import AdminButtonQuantityProfiles from "../../components/AdminButtonQuantityProfiles";
import AdminPhotoProfile from "../../components/AdminPhotoProfile";
import AdminLastAdvice from "../../components/AdminLastAdvice";

interface IAdminProps{}

// NetInfo.fetch().then(state => {
//   console.log("\nConnection type", state.type);
//   console.log("Is connected?", state.isConnected);
//   console.log("isInternetReachable", state.isInternetReachable)
//   console.log("details", state.details)
// });

// const granted = async () =>{
//   await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//     {
//       title: 'Location permission is required for WiFi connections',
//       message:
//         'This app needs location permission as this is required  ' +
//         'to scan for wifi networks.',
//       buttonNegative: 'DENY',
//       buttonPositive: 'ALLOW',
//     },
//   );
// } 

// const wifiList = () => {
//   WifiManager.reScanAndLoadWifiList().then((data) => {
//   return console.log(data);
// })};

// const askLocationPermission = async () => {
//   const result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
  
//   console.log('result', result);

//   if(result) {
//     return true;
//   }

//   const response = await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//     {
//       title: 'Permissão de localização é necessária para conexões WiFi',
//       message: 'Este app precisa de permissão de localização para escanear redes WiFi',
//       buttonNegative: 'Não',
//       buttonPositive: 'Permitir'
//     }
//   )

//   if(response === PermissionsAndroid.RESULTS.GRANTED) {
//     return true;
//   }

//   return false;
// }

const Admin: React.FC<IAdminProps> = ({ navigation }: any) => {

  const [ssid, setSsid] = useState('');

  const initWifi = async () => {
    try {
      const ssid = await WifiManager.getCurrentWifiSSID();
      setSsid(ssid);
      console.log('Your current connected wifi SSID is ' + ssid);
    } catch (error) {
      setSsid('Cannot get current SSID!' + error);
      // console.log('Cannot get current SSID!', {error});
    }
  }

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Permissão de localização",
          message:
            "Permissão de localização é necessária para conectar ou escanear WiFi's locais",
          buttonNeutral: "Lembrar depois",
          buttonNegative: "Não",
          buttonPositive: "Permitir"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        initWifi();
        scanExample();
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      // console.warn(err);
    }
  };

  const scanExample = async () => {
    // try {
      // const data = await WifiManager.reScanAndLoadWifiList()
      // console.log(typeof data);
      await WifiManager.reScanAndLoadWifiList().then((wifis) => {
        // push(parseList(wifiStringList))
        console.log(WifiManager.reScanAndLoadWifiList().catch());

        const wifiArray = JSON.parse(wifis.toString());

        console.log(wifiArray);
      })
    // } catch (error) {
      // console.log(error);
    // }
  }

  // useEffect(() => {(
  //   async () => {
  //     const granted = await askLocationPermission();
  //     console.log('granted', granted);
  //     if (granted != null) {
  //       // scanExample();
  //       scanTest();
  //     } else {
  //       alert('Negado!');
  //     }
  //   })()
  // }, []);

  // const scanExample = () => {
  //   WifiManager.reScanAndLoadWifiList((wifiStringList: string) => {
  //     let wifiArray = JSON.parse(wifiStringList);
  //       console.log(wifiArray);
  //     } (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // const scanTest = () => {

  //   WifiManager.reScanAndLoadWifiList()
  //   .then((wifiList: Array<WifiManager.WifiEntry>) => {
  //     console.log(wifiList)
  //   })
  //   .catch((ex: Error) => {
  //     console.log(ex)
  //   })

    // WifiManager.reScanAndLoadWifiList((data) => {
      // let Array = JSON.parse(data);
    // })
    // WifiManager.reScanAndLoadWifiList().then((data) => {
      // let wifiArray = JSON.parse(data);
      // return console.log(data.toString);

      // useEffect(() => {
      //   requestLocationPermission();
      // }, []);


  return (
    <Container>

      <StatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor="black"
      />

      <BackgroundImage 
        source={Background} 
        resizeMode="cover" style={{
          height: 200,
        }}
      >
        <AdminHeader>
          <WelcomeContainer>
            <HeaderTitle>Olá Admin,</HeaderTitle>
            <Description>Muito bem-vindo a plataforma</Description>
          </WelcomeContainer>
          <Image source={AdminImage}/>
        </AdminHeader>
      </BackgroundImage>

      <Content>
        <DivisorCategory>
          <View style={{marginHorizontal:20}}>
            <AdminTitle
              text="Dados e Atalhos"
            />
          </View>
          <ScrollView 
            horizontal={true}
            contentContainerStyle={{paddingLeft: 20}}
            automaticallyAdjustContentInsets={true}
            showsHorizontalScrollIndicator={false}
          >
            <AdminDataNumber
              category="Avisos"
              number={400}
              backgroundColor="#957AF6"
            />
            <AdminDataNumber 
              category="Usuários"
              number={212}
              backgroundColor="#CD7AF6"
              onPress={() => navigation.navigate('UserList')}
            />
            <AdminDataNumber 
              category="Solicitações"
              number={12}
              backgroundColor="#F69C7A"
            />
          </ScrollView>
        </DivisorCategory>

        <DivisorCategory>
          <View style={{marginHorizontal:20}}>
            <AdminTitle
              text="Usuários PCD's:"
              seeAll={true}
            />
          </View>
          <GridPhotos>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminButtonQuantityProfiles number={86}/>
          </GridPhotos>
        </DivisorCategory>

        <DivisorCategory>
          <View style={{marginHorizontal:20}}>
            <AdminTitle
              text="Últimos Avisos:"
              seeAll={true}
            />
            
            <AdminLastAdvice 
              userPicture={Background}
              userName="Leandro Master Top"
              adviceHour="14:43"
              adviceName="Limpeza - corredor 2B"
              adviceTimeRemaining="2h"
              isImpassable={false} 
              dueDay="04" 
              dueMonth="Outubro" 
              dueYear="2021"
              dueHour="14" 
              dueMinute="20"
            />

            <AdminLastAdvice 
              userPicture={Background}
              userName="Laura Souza Silva Santos"
              adviceHour="14:43"
              adviceName="Limpeza - corredor 2B"
              adviceTimeRemaining="5h"
              isImpassable={true}
              dueDay="04" 
              dueMonth="Outubro" 
              dueYear="2021"
              dueHour="14" 
              dueMinute="20"
            />
            
            <AdminLastAdvice 
              userPicture={Background}
              userName="Isaque José de Souza"
              adviceHour="14:43"
              adviceName="Limpeza - corredor 2BoQuintasDavifsjoifjsiofjoisj fsuh uisfu ihfsiuh iufshui hfsiuh uifsh uihsiu hush"
              adviceTimeRemaining="1d"
              isImpassable={true} 
              dueDay="04" 
              dueMonth="Outubro" 
              dueYear="2021"
              dueHour="14" 
              dueMinute="20"
            />
          </View>
        </DivisorCategory>

        <Credits>
          <ImageCredits source={Logo} resizeMode="contain"/>
        </Credits>

      </Content>
    </Container>
  )
}

export default Admin;