import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'

import PostVideos from './PostVideos'

function Posts({ item, navigation }){

const onPressViewComments = () => {}
const [valueComment1, onChangeComment1] = useState('')

function postsItem({ item }){
return (
<View style={styles.posts_item}>
<View style={{flexDirection: 'column'}}  >
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
</View>
<PostVideos item={'post_videos' in item ? item.post_videos: item} navigation={navigation}/>
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
{<View
    style={[styles.like,{ backgroundColor: item.like ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.comment,{ backgroundColor: item.comment ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.share,{ backgroundColor: item.share ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.save,{ backgroundColor: item.save ? 'red' : 'black' }]}
   />}
<Text style={styles.post_label} numberOfLines={1}>{item.post_label}</Text>
</View>
<Text style={styles.post_description}>{item.post_description}</Text>
<TouchableOpacity  onPress={onPressViewComments}>
    <View style={styles.view_comments}>{'View Comments'}</View>
</TouchableOpacity>
<Image
    style={styles.profile_image}
    source={{uri: item.profile_image}}
    />
<TextInput style={styles.comment1} value={valueComment1} onChangeText={onChangeComment1} placeholder={'Comment1'} />
</View>
)}

return (
<FlatList
    style={styles.posts}
    data={item}
    renderItem={postsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Posts;

const styles = StyleSheet.create({
    "like": {
        "width": 30,
        "height": 30,
        "marginTop": 5,
        "borderRadius": 20,
        "backgroundColor": "#56FD5A"
    },
    "save": {
        "width": 30,
        "height": 30,
        "marginTop": 5,
        "borderRadius": 20,
        "backgroundColor": "#56FD5A"
    },
    "share": {
        "width": 30,
        "height": 30,
        "marginTop": 5,
        "borderRadius": 20,
        "backgroundColor": "#56FD5A"
    },
    "comment": {
        "width": 30,
        "height": 30,
        "marginTop": 5,
        "borderRadius": 20,
        "backgroundColor": "#56FD5A"
    },
    "comment1": {
        "flex": 1,
        "margin": 5,
        "padding": 10,
        "fontSize": 15,
        "fontWeight": "400",
        "backgroundColor": "whitesmoke"
    },
    "user_name": {
        "flex": 1,
        "color": "#15B6CA",
        "fontSize": 18,
        "marginTop": 5,
        "fontFamily": "monospace",
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "post_label": {
        "flex": 1,
        "color": "#15B6CA",
        "fontSize": 15,
        "marginTop": 5,
        "fontFamily": "monospace",
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "user_image": {
        "width": "20vw",
        "height": "20vw",
        "marginTop": 5,
        "backgroundColor": "#56FD5A",
        "marginHorizontal": "10px"
    },
    "profile_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5,
        "backgroundColor": "#56FD5A"
    },
    "view_comments": {
        "flex": 1,
        "color": "white",
        "margin": 5,
        "padding": 10,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5"
    },
    "post_description": {
        "color": "#B01EFF",
        "fontSize": 12,
        "marginTop": 5,
        "fontFamily": "Roboto",
        "fontWeight": "250",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});