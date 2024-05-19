const api = "http://api.schedule.asiayo.com/";
const payload = {
    name: "岡山馬拉松",
    price: 8150
};

fetch(api, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "channel": "CP",
        "user": "OOO"
    },
    body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => {
    if (data.status && data.status.code !== 200) {
        // 處理錯誤回應
        console.error("API returned an error:", data.status.msg);
        if (data.data && data.data.errors) {
            console.error("Errors:", data.data.errors);
        }
    } else {
        // 處理成功回應
        console.log("API response data:", data);
    }
})
.catch(err => {
    console.error("Error occurred:", err);
});

//3B

const displayErrors = (response) => {
    if (response.status === 400) {
        const body = JSON.parse(response.body);
        const errors = body.data.errors;
        console.log("Errors:", errors);
    } else {
        console.log("No errors found.");
    }
};

//3C
[
    {
        "name": "岡山馬拉松",
        "price": "1000" //應該是number type not string type
    }
]