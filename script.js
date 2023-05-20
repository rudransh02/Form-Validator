const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const contact = document.getElementById('contact');

function throwError(input, message)
{
    const formClass = input.parentElement;
    formClass.className = 'form-class error';
    const small = formClass.querySelector('small');
    small.innerText = message;
}

function onSuccess(input)
{
    const formClass = input.parentElement;
    formClass.className = 'form-class success';
}

function isEmailValid(input)
{
    const emailFormat = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (emailFormat.test(input.value))
    {
        onSuccess(input);
        console.log(`${getFieldName(input)}: ${input.value}`);
    }
    else
    {
        throwError(input, 'Email Is Invalid!');
    }
}

function getFieldName(input)
{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function verifyLength(input, min, max)
{
    if (input.value.length < min)
    {
        throwError(input, `${getFieldName(input)} Must Be More Than or Equal To ${min}!`);
    }
    else if (input.value.length > max)
    {
        throwError(input, `${getFieldName(input)} Must Be Less Than Or Equal To ${max}!`);
    }
    else
    {
        onSuccess(input);
        console.log(`${getFieldName(input)}: ${input.value}`);
    }
}

function checkRequired(input)
{
        if (input.value.trim() === '')
        {
            throwError(input, `${getFieldName(input)} Is Required!`)
            return false;
        }
        else
        {
            onSuccess(input);
            return true;
        }
}

form.addEventListener('submit', function(event)
{
    event.preventDefault();
    
    if (checkRequired(username))
    {
        verifyLength(username, 3, 15);
    }
    if(checkRequired(email))
    {
        isEmailValid(email);
    }
    if (checkRequired(contact))
    {
        verifyLength(contact, 10, 10);
    }
    if (checkRequired(password))
    {
        verifyLength(password, 6, 20);
    }
});