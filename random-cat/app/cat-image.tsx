"use client";
import {useState} from "react";
import {fetchImage} from "./fetch-image";
type CatImageProps= {
  url: string;
};

export function CatImage({url}: CatImageProps){
  const [imageUrl,setImageUrl] = useState<string>(url);
  const refreshImage = async()=>{
    setImageUrl("");
    const image = await fetchImage();
    setImageUrl(image.url);
  };

  return(
    <div>
      <button onClick={refreshImage}>ほかのにゃんこも見る</button>
      {imageUrl &&<img src={url}/>}
    </div>
  );
}