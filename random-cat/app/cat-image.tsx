"use client";
type CatImageProps= {
  url: string;
};

export function CatImage({url}: CatImageProps){
  const [imageUrl,setImageUrl] = useState(url);
  const refreshImage = async()=>{
    setImageUrl("");
    
  }
  return(
    <div>
      <img src={url}/>
    </div>
  )
}