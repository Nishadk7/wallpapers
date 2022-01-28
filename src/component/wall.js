import React from "react";

const handleClick  = async () => {
    const res = await axios.get(
      "https://www.reddit.com/r/wallpapers/.json?&limit=1&raw_json=1"
    );
    console.log(res.data);
    var data = await res.data;
    
    var allData = [];
    
    data.data.children.map((item) => {
      try {
        const parent_img = item.data.preview.images[0].resolutions[3].url;
        allData.push({
          id: item.data.id,
          title: item.data.title,
          url: item.data.url,
          author: item.data.author,
          small_img: parent_img,
          ups: item.data.ups,
          permalink: item.data.permalink,
        });
      } catch (e) {
        console.log(e);
      }
    });
    console.log("after mapping...");
    console.log(allData[0].url);

}
