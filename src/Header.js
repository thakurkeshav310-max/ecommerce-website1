const Header=({headerInfo,email,phone,children})=>{
    return(
        <div>Header
            <h2>{headerInfo.name}{email}{phone}------</h2>
            <h4>{children}</h4>

        </div>
     )
}
export default Header