export default function HeaderItem({ name, Icon }) {
    return (<div className='text-white flex items-center cursor-pointer p-1 hover:underline underline-offset-8'>
        <Icon />
        <h1 className='ml-3'>{name}</h1>
    </div>
    )
}