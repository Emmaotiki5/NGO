
export const metadata = {
    title: 'My Page Title',
}
export default function ProfileLayoutPage({children}) {
    return (
        <>
        <div className="mt-5">
            {children}
        </div>
        </>
    )
}