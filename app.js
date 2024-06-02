let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset_Button");
let new_btn = document.querySelector("#new_Button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let player_1 = prompt("Player-1 : ").toUpperCase();
let player_2 = prompt("Player-2 : ").toUpperCase();
let turn_O = true; // playerX, playerO

const win_ptrns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const reset_Game = () => 
{
    turn_O = true;
    enable_boxes();
    msgContainer.classList.add("hide");
}
const new_Game = () => 
{
    turn_O = true;
    enable_boxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => 
{
    box.addEventListener("click", () => {
        
        if(turn_O) 
        {
            box.innerText = "O";
            turn_O = false;
        }
        else
        {
            box.innerText = "X";
            turn_O = true;
        }
        box.disabled = true;
        
        checkwinner();

        
    });
});
const disable_boxes = () => 
{
    for(box of boxes)
    {
        box.disabled = true;
    }
}

const enable_boxes = () => 
{
    for(box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}

const show_Winner = (pos1_Val) => 
{   
    if(pos1_Val === "O")
    {
        msg.innerText = `${player_1} JI IS THE WINNER😄\nCONGRATULATIONS!!!`;
    }
    else
    {
        msg.innerText = `${player_2} JI IS THE WINNER😄\nCONGRATULATIONS!!!`;
    }
    msgContainer.classList.remove("hide");
    
    disable_boxes();
}

const draw = () => {
    
    if ([...boxes].every(box => box.innerText != ''))
    {   
        setTimeout(() => 
        {
            msg.innerText = `Oops it's a draw 😅`;
            msgContainer.classList.remove("hide");
        },1000);
        
    }
    
}

function checkwinner()
{
    for (let pattern of win_ptrns)
    {
        let winner_Found = true;
        let pos1_Val = boxes[pattern[0]].innerText;
        let pos2_Val = boxes[pattern[1]].innerText;
        let pos3_Val = boxes[pattern[2]].innerText;

        if(pos1_Val != '' && pos2_Val != '' && pos3_Val != '')
        {
            if(pos1_Val ==pos2_Val && pos2_Val == pos3_Val )
            {
                disable_boxes();

                setTimeout(() => {
                    show_Winner(pos1_Val);
                },1000);
                
            }   
        }

    draw();
    
    }
}

new_btn.addEventListener("click",new_Game);
reset_btn.addEventListener("click",reset_Game);