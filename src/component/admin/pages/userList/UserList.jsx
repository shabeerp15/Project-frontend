import './userList.css'
import { DataGrid } from '@material-ui/data-grid'

function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'username',
      headerName: 'Username',
      width: 200,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
    {
      field: 'mobile',
      headerName: 'Mobile',
      width: 150,
    },
    {
      field: 'age',
      headerName: 'Age',
      width: 110,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
  ]

  const rows = [
    {
      id: 1,
      username: 'Muhammed Shabeer',
      email: 'shabeerp15@gmial.com',
      mobile: '9995885021',
      status: 'active',
      age: '26',
    },
    {
      id: 2,
      username: 'shakkir',
      email: 'shakkir@gmial.com',
      mobile: '1234567890',
      status: 'blocked',
      age: '21',
    },
  ]

  return (
    <div className="userList">
      <div className="userListTopbar">
        <form action="">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="search here......"/>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default UserList
