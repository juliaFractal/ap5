import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];

const posts=() =>{
	const rows = [];
	for(let i = 0; i<images.length; i+=4){
		rows.push(
			<View key={i}>
				<View style={styles.row}>
					{images.slice(i, i+4).map((element, index)=>(
						<Image key={index}
							style={styles.image}
							source={{uri: element}}
						/>
					))}
				</View>
			</View>
		);
	}
	return rows;
};
const header = () => {
	return(
		<View style={styles.header}>
			<Image
				style={styles.pfp}
				source={{uri: images[0]}}
			/>
			<View>
				<View style={styles.data}>
					<View>
						<Text style={{fontWeight: 'bold'}}>Posts</Text>
						<Text>20</Text>
					</View>
					<View>
						<Text style={{fontWeight: 'bold'}}>Followers</Text>
						<Text>110304</Text>
					</View>
					<View>
						<Text style={{fontWeight: 'bold'}}>following</Text>
						<Text>1103</Text>
					</View>
				</View>
				<Pressable style={styles.edit}>
					<Text style={{color: 'white'}}>Edit Profile</Text>
				</Pressable>
			</View>
		</View>
	);
}

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
		{header()}
		{posts()}
	  </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
	flexDirection: 'column',
  },
  image: {
	flex: 1,
	margin: 3,
	width: screenWidth/4-6,
	height: screenWidth/4-6,
  },
  row: {
	flex: 1,
	flexDirection: 'row',
  },
  header:{
	flex: 1,
	marginTop: screenWidth/5,
	marginBottom: screenWidth/15,
	justifyContent: 'space-around',
	flexDirection: 'row',
  },
  pfp:{
	width: screenWidth/4-6,
	height: screenWidth/4-6,
	borderRadius: 50,
  },
  data: {
	width: screenWidth/2,
	flexDirection: 'row',
	justifyContent: 'space-between',
	margin: 10,
  },
  edit: {
	backgroundColor: 'gray',
	height: 35,
	borderRadius: 5,
	alignItems: 'center',
	justifyContent: 'center'
  }
});