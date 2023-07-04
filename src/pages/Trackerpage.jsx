import { useContext, useEffect, useState } from "react"
import { UserContext } from "../userContext"
import { Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";

import TableContent from "../components/TableContent";
import axios from "axios";
function TrackerPage() {
  const [logs, setLogs ] = useState([])
  const [refresh, setRefresh] = useState([])

  useEffect(()=>{
    axios.get('/insight',{headers:{'usertoken':localStorage.getItem('usertoke')}}).then(({data})=>{
      setLogs(data.logs)
    })
  },[refresh])
n

  const { ready, user } = useContext(UserContext);


  if (ready && !user.email) {
    return <Navigate to={'/login'} />
  }

 

  return (
    <>
    <NavBar current={'/tracker'} />
    <TableContent logs={logs} setRefresh={setRefresh} refresh={refresh} />

    </>
  )
}

export default TrackerPage