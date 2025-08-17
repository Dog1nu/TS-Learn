"use client";
import {useState} from "react";
import {fetchImage} from "./fetch-image";
import styles from "./page.module.css"
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
    <div className={styles.page}>
       <button onClick={refreshImage}>ほかのにゃんこも見る</button>
      <div className={styles.flame}>
        {imageUrl &&<img src={imageUrl} className={styles.img}/>}
      </div>
    </div>
  );
}