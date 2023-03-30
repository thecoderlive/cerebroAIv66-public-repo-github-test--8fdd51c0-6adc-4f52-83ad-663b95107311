import React, { useState } from 'react'
import { FlatList, StyleSheet, View, Image } from 'react-native'



function PostVideos({ item, navigation }){



function postVideosItem({ item }){
return (
<View style={styles.post_videos_item}>
<Image
    style={styles.post}
    source={{uri: item.post}}
    />
</View>
)}

return (
<FlatList
    horizontal={true}
    style={styles.post_videos}
    data={item}
    renderItem={postVideosItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
)}

export default PostVideos;

const styles = StyleSheet.create({
    "post": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    }
});