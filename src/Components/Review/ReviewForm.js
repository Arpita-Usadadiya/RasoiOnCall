import {useState} from "react";

const ReviewForm = ({chefId})=>{

const [rating,setRating] = useState(5);
const [comment,setComment] = useState("");

const submitReview = async ()=>{

    const userId = localStorage.getItem("userId");

await fetch("http://localhost:8000/review/add",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
    userId,
chefId,
rating,
comment
})
});

alert("Review Submitted");
};

return(

<div className="bg-gray-100 p-5 rounded-lg mt-8">

<h3 className="font-bold text-lg mb-3">
Leave Feedback
</h3>

<select
className="border p-2 w-full"
value={rating}
onChange={(e)=>setRating(e.target.value)}
>

<option value="5">⭐ 5</option>
<option value="4">⭐ 4</option>
<option value="3">⭐ 3</option>
<option value="2">⭐ 2</option>
<option value="1">⭐ 1</option>

</select>

<textarea
className="border p-2 w-full mt-3"
placeholder="Write feedback..."
value={comment}
onChange={(e)=>setComment(e.target.value)}
/>

<button
onClick={submitReview}
className="bg-orange-500 text-white px-4 py-2 mt-3 rounded"
>

Submit Review

</button>

</div>

);

};

export default ReviewForm;