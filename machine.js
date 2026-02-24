let interviewList = [];
let rejectedList = [];


let Total = document.getElementById("Total");
let interviewNumber = document.getElementById("interviewNumber");
let rejectedNumber = document.getElementById("rejectedNumber");

let mainContainer = document.querySelector("main");
let allCard = document.getElementById("allCard");
let FilterSection = document.getElementById("filterSection");

// count update 
function calculation() {
    Total.innerText = allCard.children.length;
    interviewNumber.innerText = interviewList.length;
    rejectedNumber.innerText = rejectedList.length;
    totalJobs.innerText=Total.innerText;
}
calculation();

// buttons 
const allButton = document.getElementById("all-button");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");


function renderList(list, label, bgColor) {
    FilterSection.innerHTML = ``;
    
    if (list.length == 0) {
        FilterSection.innerHTML = `<div class="child-jobs-card p-6 bg-white rounded-[8px] my-5 border border-gray-100 flex flex-col items-center py-[111px]">
                <img src="jobs.png" alt="" class="mb-4">
                <h1 class="text-xl font-semibold">No jobs available</h1>
                <p class="text-[#64748b]">Check back soon for new job opportunities</p>
            </div>`;
        return; 
    }

    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let div = document.createElement("div");
        div.className = `child-jobs-card job1 p-6 bg-white rounded-[8px] my-5 border border-gray-100`;
        div.innerHTML = `
            <div class="childDiv">
                <div class="flex justify-between">
                    <div>
                        <h4 class="font-semibold companyName">${item.companyName}</h4>
                        <p class="text-[#64748b] jobTitle">${item.jobTitle}</p>
                    </div>
                    <button class="btn bg-white border border-[#f1f2f4] rounded-full h-8 w-8 min-h-0 p-0">
                        <i class="fa-solid fa-trash"></i>
                    </button> 
                </div>
                <ul class="flex flex-col md:flex-row gap-3 md:gap-7 list-disc pl-4 md:pl-0 my-5 text-[#64748b] text-sm">
                    <li class="md:list-none item1">${item.item1}</li>
                    <li class="item2">${item.item2}</li>
                    <li class="item3">${item.item3}</li>
                </ul>
            </div>
            <div class="parent-Applied-button">
                <div class="apply-btn mb-3"> 
                    <button class="btn ${bgColor} text-white btn-sm">${label}</button>
                </div>
                <p class="text-sm text-gray-600 mb-5 jobDescription">${item.jobDescription}</p>
                <div class="button flex gap-2"> 
                    <button class="btn btn-sm interview-btn border-[#10B981] text-[#10B981] bg-white">INTERVIEW</button>
                    <button class="btn btn-sm rejected-btn border-[#ef4444] text-[#ef4444] bg-white">REJECTED</button>
                </div>
            </div>`;
        FilterSection.appendChild(div);
    }
}

function show(id) {
    allButton.classList.remove("bg-blue-500", "text-white");
    interviewBtn.classList.remove("bg-blue-500", "text-white");
    rejectedBtn.classList.remove("bg-blue-500", "text-white");

    allButton.classList.add("bg-[#ffffff]", "text-[#64748b]");
    interviewBtn.classList.add("bg-[#ffffff]", "text-[#64748b]");
    rejectedBtn.classList.add("bg-[#ffffff]", "text-[#64748b]");

    const selected = document.getElementById(id);
    selected.classList.remove("bg-[#ffffff]", "text-[#64748b]");
    selected.classList.add("bg-blue-500", "text-white");

    if (id == 'interview-btn') {
        allCard.classList.add("hidden");
        FilterSection.classList.remove("hidden");
        renderList(interviewList, 'Interviewing', 'bg-[#10B981]');
    } else if (id == 'all-button') {
        allCard.classList.remove("hidden");
        FilterSection.classList.add("hidden");
    } else if (id == 'rejected-btn') {
        allCard.classList.add("hidden");
        FilterSection.classList.remove("hidden");
        renderList(rejectedList, 'Rejected', 'bg-[#c94316]');
    }
}


mainContainer.addEventListener("click", function (event) {
 
    if (event.target.classList.contains('interview-btn')) {
        let parentNode = event.target.closest(".child-jobs-card");
        const companyName = parentNode.querySelector(".companyName").innerText;
        const jobTitle = parentNode.querySelector(".jobTitle").innerText;
        const item1 = parentNode.querySelector(".item1").innerText;
        const item2 = parentNode.querySelector(".item2").innerText;
        const item3 = parentNode.querySelector(".item3").innerText;
        const jobDescription = parentNode.querySelector(".jobDescription").innerText;
        let applyBtnArea = parentNode.querySelector(".apply-btn");

        let companyExist = interviewList.find(item => item.companyName == companyName);
        if (!companyExist) {
            interviewList.push({ companyName, jobTitle, item1, item2, item3, jobDescription });
            rejectedList = rejectedList.filter(item => item.companyName !== companyName);
        }
        
        if (!allCard.classList.contains('hidden')) {
            applyBtnArea.innerHTML = `<button class="btn bg-[#10B981] text-white">Interviewing</button>`;
        } else {
            
            if (rejectedBtn.classList.contains('bg-blue-500')) {
                renderList(rejectedList, 'Rejected', 'bg-[#c94316]');
            } else {
                renderList(interviewList, 'Interviewing', 'bg-[#10B981]');
            }
        }
        calculation();
    } 

    else if (event.target.classList.contains('rejected-btn')) {
        let parentNode = event.target.closest(".child-jobs-card");
        const companyName = parentNode.querySelector(".companyName").innerText;
        const jobTitle = parentNode.querySelector(".jobTitle").innerText;
        const item1 = parentNode.querySelector(".item1").innerText;
        const item2 = parentNode.querySelector(".item2").innerText;
        const item3 = parentNode.querySelector(".item3").innerText;
        const jobDescription = parentNode.querySelector(".jobDescription").innerText;
        let applyBtnArea = parentNode.querySelector(".apply-btn");

        let companyExist = rejectedList.find(item => item.companyName == companyName);
        if (!companyExist) {
            rejectedList.push({ companyName, jobTitle, item1, item2, item3, jobDescription });
            interviewList = interviewList.filter(item => item.companyName !== companyName);
        }

        if (!allCard.classList.contains('hidden')) {
            applyBtnArea.innerHTML = `<button class="btn bg-[#c94316] text-white">Rejected</button>`;
        } else {
         
            if (interviewBtn.classList.contains('bg-blue-500')) {
                renderList(interviewList, 'Interviewing', 'bg-[#10B981]');
            } else {
                renderList(rejectedList, 'Rejected', 'bg-[#c94316]');
            }
        }
        calculation();
    }

    if (event.target.classList.contains('fa-trash') || event.target.closest('.fa-trash')) {
        let parentNode = event.target.closest(".child-jobs-card");
        const companyName = parentNode.querySelector(".companyName").innerText;

        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        if (!allCard.classList.contains('hidden')) {
            parentNode.remove();
         
        } else {
            if (interviewBtn.classList.contains('bg-blue-500')) {
                renderList(interviewList, 'Interviewing', 'bg-[#10B981]');
            } else {
                renderList(rejectedList, 'Rejected', 'bg-[#c94316]');
            }
        }
        calculation();
    }
});
