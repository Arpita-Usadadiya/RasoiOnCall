import {useEffect,useState} from "react";

const ReviewList = ({chefId})=>{

const [reviews,setReviews] = useState([]);
const [topReview,setTopReview] = useState(null);

useEffect(()=>{
fetchReviews();
},[]);

const fetchReviews = async ()=>{

const res = await fetch(
`http://localhost:8000/review/chef/${chefId}`
);

const data = await res.json();

setReviews(data.data);
setTopReview(data.topReview);

};

const likeReview = async (id)=>{

await fetch(
`http://localhost:8000/review/like/${id}`,
{
method:"PATCH"
});

fetchReviews();

};

return(

<div className="mt-10">

<h2 className="text-xl font-bold mb-4">
Customer Reviews
</h2>

{topReview && (

<div className="bg-yellow-100 p-4 rounded mb-5">

<h3 className="font-semibold">
🔥 Top Review
</h3>

<p className="text-yellow-600">
⭐ {topReview.rating}
</p>

<p>{topReview.comment}</p>

<p>👍 {topReview.likes}</p>

</div>

)}


{reviews.map((r)=>(
<div
key={r._id}
className="border p-4 rounded-lg mb-3"
>

<p className="font-semibold">
{r.userId?.name || "User"}
</p>

<p className="text-yellow-500">
⭐ {r.rating}
</p>

<p className="text-gray-600">
{r.comment}
</p>

<button
onClick={()=>likeReview(r._id)}
className="text-blue-500 mt-2"
>

👍 {r.likes} Like

</button>

</div>
))}

</div>

);

};

export default ReviewList;