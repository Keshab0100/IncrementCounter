
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {

    counter.innerHTML = 0;

    const updatecounter = () => {
     
        const targetcount = +counter.getAttribute('data-target');//The + sign is present to convert the stirng to number

        const startingNo = Number(counter.innerHTML);//the number ftn does the same thing as +
    
        const incr = targetcount/100;
    
        if(targetcount>startingNo){
            counter.innerHTML = `${startingNo + incr}`;
            setTimeout(updatecounter, 10)
        }
        else{
            counter.innerHTML = targetcount;
        }
    }
    updatecounter();

})