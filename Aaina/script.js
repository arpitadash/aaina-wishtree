let currentBranchId = null;
const wishes = {
    education: [
        {
            "name": "Dress",
            "fullAmount": 500,
            "halfAmount": 250,
            "caption": "A clean dress is a basic need! Help a child feel dignified and comfortable as they head to school.",
            "increment": 250
        },
        {
            "name": "School Uniform",
            "fullAmount": 500,
            "halfAmount": 250,
            "caption": "Every child deserves to fit in! Provide a uniform that offers both dignity and a sense of belonging.",
            "increment": 250
        },
        {
            "name": "Shoes",
            "fullAmount": 400,
            "halfAmount": 200,
            "caption": "Every step matters! A sturdy pair of shoes can protect a child’s feet and uplift their spirit.",
            "increment": 200
        },
        {
            "name": "Hearing Aid",
            "fullAmount": 10000,
            "halfAmount": 1000,
            "caption": "Access to sound is a right! Your support can provide vital hearing aids for children in need of learning.",
            "increment": 1000
        },
        {
            "name": "Wheelchair",
            "fullAmount": 7500,
            "halfAmount": 1500,
            "caption": "Mobility opens doors! Help a child access education and community with a supportive wheelchair.",
            "increment": 1500
        },
        {
            "name": "Teaching Learning Materials (TLM)",
            "fullAmount": 1000,
            "halfAmount": 500,
            "caption": "Essential tools for education! Equip a child with the materials they need to learn and thrive.",
            "increment": 500
        },
        {
            "name": "White Cane",
            "fullAmount": 600,
            "halfAmount": 300,
            "caption": "Independence through guidance! A white cane empowers visually impaired children to navigate the world safely.",
            "increment": 300
        },
        {
            "name": "School Supplies (Books, Pencil, etc.)",
            "fullAmount": 500,
            "halfAmount": 250,
            "caption": "Basic supplies for bright futures! Ensure every child has the tools they need to succeed in school.",
            "increment": 250
        },
        {
            "name": "Walker",
            "fullAmount": 1500,
            "halfAmount": 750,
            "caption": "Support their journey! A walker can help a child gain independence and confidence in their steps.",
            "increment": 750
        },
        {
            "name": "10th Certification NIOS",
            "fullAmount": 4000,
            "halfAmount": 1000,
            "caption": "Pave the way to graduation! Your support can help a child secure their education certification.",
            "increment": 1000
        },
        {
            "name": "Special/Modified Shoes",
            "fullAmount": 4000,
            "halfAmount": 1000,
            "caption": "Comfort is essential! Help children with special needs walk easily and confidently with the right shoes.",
            "increment": 1000
        },
        {
            "name": "Activity Table for CwD",
            "fullAmount": 1500,
            "halfAmount": 750,
            "caption": "Encourage learning through play! An activity table makes education accessible and enjoyable for children with disabilities.",
            "increment": 750
        }
    ],
    wellbeing: [
        {
            "name": "Nutrition Food",
            "fullAmount": 300,
            "halfAmount": 150,
            "caption": "Nourishment is a right! Provide nutritious food to fuel a child’s growth and development.",
            "increment": 150
        },
        {
            "name": "Sanitary Pads",
            "fullAmount": 200,
            "halfAmount": 100,
            "caption": "Dignity during menstruation! Help provide sanitary pads to ensure girls can attend school without worry.",
            "increment": 100
        },
        {
            "name": "Sanitary Kit (Soap, Handwash, Phenyl, Cleaning brush)",
            "fullAmount": 400,
            "halfAmount": 200,
            "caption": "Hygiene is essential for health! Provide hygiene kits to promote cleanliness and safety for families.",
            "increment": 200
        },
        {
            "name": "Iron and Calcium Supplements",
            "fullAmount": 400,
            "halfAmount": 200,
            "caption": "Strong bodies need essential nutrients! Help provide iron and calcium for children’s growth and health.",
            "increment": 200
        },
        {
            "name": "Medicines for Camps",
            "fullAmount": 5000,
            "halfAmount": 500,
            "caption": "Access to medicine can save lives! Support medical camps that provide essential medications to underserved communities.",
            "increment": 250
        },
        {
            "name": "Vitamins",
            "fullAmount": 350,
            "halfAmount": 175,
            "caption": "Essential vitamins for a healthy life! Help ensure children have the nutrients needed for strong immunity.",
            "increment": 175
        },
        {
            "name": "Ear and Eye Drops",
            "fullAmount": 300,
            "halfAmount": 150,
            "caption": "Empower their senses! Provide essential ear and eye drops that brighten the world for children with disabilities.",
            "increment": 150
          }
          
    ],
    drr: [
        {
            "name": "Ration Kit",
            "fullAmount": 2000,
            "halfAmount": 1000,
            "caption": "Survival starts with basic needs! Ration kits provide crucial food supplies for families in crisis.",
            "increment": 500
        },
        {
            "name": "Clothing and Sanitation Kit",
            "fullAmount": 1000,
            "halfAmount": 500,
            "caption": "Basic essentials for survival! Provide clothing and hygiene items to families struggling to recover.",
            "increment": 250
        },
        {
            "name": "Shelter Kit",
            "fullAmount": 3000,
            "halfAmount": 1500,
            "caption": "A safe place to call home! Shelter kits offer protection and support for families after a disaster.",
            "increment": 500
        },
        {
            "name": "Housing and Livelihood Support",
            "fullAmount": 10000,
            "halfAmount": 5000,
            "caption": "Help families rebuild their lives! Your support empowers them to regain stability and start anew.",
            "increment": 2500
        }
    ]        
    
}

// Helper function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function getRandomWish(category) {
    const categoryWishes = wishes[category];
    if (categoryWishes && categoryWishes.length > 0) {
        const randomIndex = Math.floor(Math.random() * categoryWishes.length);
        return categoryWishes[randomIndex];
    }
    return null; // In case the category is invalid or has no wishes
}

function updateDonationAmount() {
    const slider = document.getElementById("donationSlider");
    const selectedAmountDisplay = document.getElementById("selected-amount");
    const selectedAmount = slider.value; // Get the current value of the slider
    const maxVal = slider.max;
    console.log(maxVal);
    if(parseInt(selectedAmount, 10)<parseInt(maxVal, 10)){
        selectedAmountDisplay.textContent = `Every little donation makes a BIG difference. ₹${maxVal-selectedAmount} more to go for the wish to be granted!`;
    }
    else{
    selectedAmountDisplay.textContent = `You are one step away from granting someone's wish! Click the button now.`; // Update the displayed amount
    }
}
// Function to populate modal
function populateModal() {
    const category = getUrlParameter('category');  // e.g. 'education' or 'nutrition'
    console.log('Category', category)
    

    // Ensure valid category and wish index
    if (category) {
        const wish = getRandomWish(category);     // e.g. 0, 1, 2 (index in the array)
        console.log(wish)

        if (wish) {
            // Set modal title
            document.getElementById('modal-title').innerText = wish.name;

            // Set modal description
            document.getElementById('modal-description').innerText = wish.caption;

            // Set slider min, max, step, and value
            const slider = document.getElementById('donationSlider');
            slider.min = wish.halfAmount;
            slider.max = wish.fullAmount;
            slider.step = wish.increment;
            slider.value = wish.halfAmount; // Default to half donation

            // Update the labels showing min and max amounts
            document.getElementById('min-amount').innerText = `₹${wish.halfAmount}`;
            document.getElementById('max-amount').innerText = `₹${wish.fullAmount}`;
            updateDonationAmount();
        }
    }
}


function showModal(branchId) {
    const modal = document.getElementById("modal");
    populateModal();
    modal.style.display = "block";

    // Store the clicked branch ID if needed
    // You can use this to customize the modal for different branches
}

function closeModal(showpop=true) {
    const modal = document.getElementById("modal");
    modal.style.display = "none";

    // Show popup after modal closes
    if(showpop){
    showPopup();}
}

function donate() {
    window.Location('https://payments.billdesk.com/bdcollect/bd/aainango/14469');

    // Fetch the branch element based on the current branch ID
    // const branchElementLeft = document.getElementById('branch1');
    // const branchElementRight = document.getElementById('branch2');

    // if (!branchElementLeft) {
    //     console.error(`Branch element not found for ID: ${currentBranchId}`);
    //     return;
    // }

    // // Update the branch SVG based on the clicked branch
    // const  branchImageSrcLeft = "floweringbranchleft.svg"; // New SVG for branch 1
    
    // const branchImageSrcRight = "floweringbranchright.svg"; // New SVG for branch 2
    

    // const imgElementLeft = branchElementLeft.querySelector('img');
    // const imgElementRight = branchElementRight.querySelector('img');

    // if (!imgElementLeft || !imgElementRight) {
    //     console.error("Image element not found within the branch element.");
    //     return;
    // }

    // imgElementLeft.src = branchImageSrcLeft; // Update the image source
    // imgElementRight.src = branchImageSrcRight;

    // // Update the URL with parameters
    // // const donationAmount = document.getElementById('donationSlider').value;
    // // const newUrl = window.location.href.split('?')[0] + `?branch=${currentBranchId}&donation=${donationAmount}`;
    // // window.history.pushState({ path: newUrl }, '', newUrl);

    // Show thank you modal
    showThankYouModal();

    // Close the donation modal
    closeModal(false);
}

function showThankYouModal() {
    // Display the thank-you modal
    const thankYouModal = document.getElementById('thankYouModal');
    thankYouModal.style.display = "block";
}

function closeThankYouModal() {
    // Close the thank-you modal
    const thankYouModal = document.getElementById('thankYouModal');
    thankYouModal.style.display = "none";
}


function showPopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("show");

    // Hide popup after 3 seconds
    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
}

// document.addEventListener('DOMContentLoaded', () => {
//     const tracker = document.getElementById('tracker');
//     const menuBtn = document.getElementById('hamburger-menu');

//     // Toggle tracker visibility when hamburger menu is clicked
//     menuBtn.addEventListener('click', () => {
//         tracker.style.display = tracker.style.display === 'none' ? 'block' : 'none';
//     });

//     // Simulate an update and floating +1 effect
//     function triggerPlusOne() {
//         const plusOne = document.createElement('span');
//         plusOne.classList.add('plus-one');
//         plusOne.textContent = '+1';
//         document.body.appendChild(plusOne);

//         // Remove the element after the animation ends
//         setTimeout(() => {
//             plusOne.remove();
//         }, 1000);
//     }

//     // Simulate an update every few seconds
//     setInterval(() => {
//         triggerPlusOne();
//     }, 5000); // Adjust timing as needed
// });
