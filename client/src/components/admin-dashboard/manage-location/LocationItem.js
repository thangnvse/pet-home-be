import React,{Component} from 'react';
import { Badge, Button } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getAllUsers} from '../../../store/actions/usersActions'
class LocationItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      deletionFlag: props.reportDetail.deletionFlag
    }
  }

  componentDidMount(){
  }

  _requestBanUser = () => {
    const location = this.props.location;
    const user = {id: location.ownerId,deletionFlag : this.state.deletionFlag === 1? false:true}
    axios.put('/api/admin/users', user).then(res => {
      const update = {id: this.props.location._id,deletionFlag: this.state.deletionFlag?0:1 }
      axios.put('/api/report/updateReportStatus', update).then(res =>{
        this._requestGetDelectionFlag();
      })
    });
  }

  _requestGetDelectionFlag = () => {
    axios.get(`/api/post/getById/${this.props.location._id}`).then(res => {
      this.setState({
        deletionFlag: res.data.result.deletionFlag,
        isLoading: false
      })
    }).catch(err =>{
      //todo
    });
  }

  _onClickBanUser = () => {
    this.setState({
      isLoading: true,
    })
    this._requestBanUser();
  }

  _showModal =() => {
    window.showReportDetail();
  }

  render(){
    const key = this.props.key;
    const users = this.props.allusers;
    const { deletionFlag } = this.state
    const style = deletionFlag !==1 ? "secondary" : "danger";
    const text = deletionFlag !==1? "Chưa xử lý" : "Đã xử lý";
    let owerName= []
    const {location} = this.props;
    if(users.allusers.users !== undefined){
      owerName = users.allusers.users.filter(item => item._id === location.ownerId )
    }
    const date = new Date(location.createdAt).toLocaleDateString() + ' ' + new Date(location.createdAt).toLocaleTimeString();
    return (
      <tr key={key} style= {this.state.isLoading ?{opacity:0.4}:{opacity:1}} onClick={this._showModal}>
        <td style={{verticalAlign:"middle"}}>{location.title}</td>
        <td style={{verticalAlign:"middle"}}>{owerName.length !==0 ? owerName[0].appName:'unknown'}</td>
        <td style={{verticalAlign:"middle"}}>{date}</td>
        <td style={{verticalAlign:"middle"}}><Badge color={style}>{text}</Badge></td>
        {/* <td style={{verticalAlign:"middle"}}>
        <div>{userDetail.appName}</div>
          <div className="small text-muted">Đăng ký lúc: {date}
          </div>
        </td>
        <td style={{verticalAlign:"middle"}}><Badge color={style}>{text}</Badge></td> */}
        {!this.state.deletionFlag?<td style={{verticalAlign:"middle"}}><Button color="success" size="sm" onClick={this._onClickBanUser}>Cấm người dùng</Button></td>
          :<td style={{verticalAlign:"middle"}}><Button color="warning" size="sm" onClick={this._onClickBanUser}>Hủy</Button></td>}
      </tr>
    )
  }

}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  allusers: state.allusers
});

export default connect(mapStateToProps, { getAllUsers})(withRouter(LocationItem));
