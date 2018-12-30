import React,{Component} from 'react';
import { Badge, Button } from 'reactstrap';
import axios from 'axios';
class LocationItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      hiddentFlag: props.location.hiddentFlag
    }
  }

  _onClickUpdateLocation = () => {
    const location = this.props.location;
    const locationUpdate = {id: location._id, hiddentFlag : !this.state.hiddentFlag}
    axios.put('/api/admin/updateLocation', locationUpdate).then(res => {
      this._requestGetDelectionFlag();
    });
  }

  _requestGetDelectionFlag = () => {
    axios.get(`/api/admin/getLocationById/${this.props.location._id}`).then(res => {
      this.setState({
        hiddentFlag: res.data.result.hiddentFlag,
        isLoading: false
      })
    }).catch(err =>{
      //todo
    });
  }

  _onClickBanLocation = () => {
    this.setState({
      isLoading: true,
    })
    this._onClickUpdateLocation();
  }

  _showModal =() => {
    window.showReportDetail();
  }

  _editProduct = () => {

  }

  _onSetDelete = () => {

  }

  render(){
    const { hiddentFlag } = this.state
    const style = hiddentFlag ? "secondary" : "danger";
    const text = hiddentFlag ? "Không hoạt động" : "Đang hoạt động";
    const { location } = this.props;
    const key = location._id;
    const maxRate = [];
    for (let i = 1 ; i<= 5 ; i++){
      if (i <= location.systemRating){
        maxRate.push(1);
        
      } else if ((i) === location.systemRating + 0.5){
        maxRate.push(0.5);
      } else{
        maxRate.push(0);
      }
    }
    // const date = new Date(location.updatedAt).toLocaleDateString() + ' ' + new Date(location.updatedAt).toLocaleTimeString();
    return (
      <tr key={key} style= {this.state.isLoading ? {opacity:0.4} : {opacity:1}} onClick={this._showModal}>
        <td style={{verticalAlign:"middle"}}>{location.name}</td>
        <td style={{verticalAlign:"middle"}}>{location.address}</td>
        <td style={{verticalAlign:"middle"}}>{location.description}</td>
        <td style={{verticalAlign:"middle"}}>{location.typeId.name}</td>
        <td style={{color:"orange"}}>{maxRate.map(item => item === 1? <i className="fas fa-star"></i>: (item === 0.5 ? <i className="fas fa-star-half-alt"></i>:<span style={{color:'#c8ced3'}}><i className="fas fa-star"></i></span>))}</td>
        <td style={{verticalAlign:"middle"}}><Badge color={style}>{text}</Badge></td>
        {/* <td style={{verticalAlign:"middle"}}>
        <div>{userDetail.appName}</div>
          <div className="small text-muted">Đăng ký lúc: {date}
          </div>
        </td>
        <td style={{verticalAlign:"middle"}}><Badge color={style}>{text}</Badge></td> */}
        {!this.state.hiddentFlag ? 
          <td style={{verticalAlign:"middle"}}>
            <Button color="success" size="sm" onClick={this._onClickBanLocation}>
                                  Ẩn
            </Button>
          </td>
          : <td style={{verticalAlign:"middle"}}>
              <Button color="warning" size="sm" onClick={this._onClickBanLocation}>
                                  Hiện
              </Button>
            </td>}
          <td>    
            { location.ownerId._id === this.props.user.user_id && this.props.user.role === 3 ? 
              <Button 
                color="success" 
                style={{ marginRight: 10 }} 
                onClick={() => this._editProduct(location)}>
                  <i className="fa fa-pencil-square-o"></i>
                  <input type="hidden" value={location._id} />
              </Button> : null}     
            { location.ownerId._id === this.props.user.user_id && this.props.user.role === 3 ? 
               <button 
                className="btn btn-danger" 
                onClick={this._onSetDelete} 
                data-toggle="modal" 
                data-target="#deleteProduct">
                  <i className="fa fa-trash"></i>
                  <input type="hidden" value={location._id} />
              </button> : null }     
          </td>
      </tr>
    )
  }

}

export default LocationItem;

