const fruits = ['mango','banana','orange']
export default function Fruits(){
    return <>
        <ul>
            {fruits.map((fruit) => 
            <li>{fruit}</li>
            )}
        </ul>
    </>
}