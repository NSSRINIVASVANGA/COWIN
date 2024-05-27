import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const apiStatusConstants = {
  success: 'SUCCESS',
  fail: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    dataObj: {},
  }

  componentDidMount() {
    this.getList()
  }

  onSuccess = data => {
    console.log(data)
    this.setState({apiStatus: apiStatusConstants.success, dataObj: data})
  }

  onFailure = () => {
    this.setState({apiStatus: apiStatusConstants.fail})
  }

  getList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data)
    } else {
      this.onFailure()
    }
  }

  renderCommon = () => (
    <div>
      <div className="logo-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          alt="website logo"
          className="logo"
        />
        <h1 className="logo-text"> Co-WIN </h1>
      </div>
      <h1 className="heading"> CoWIN Vaccination In India </h1>
    </div>
  )

  renderInprogress = () => (
    <div className="bg-container">
      {this.renderCommon()}
      <div data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" width={80} height={80} />
      </div>
    </div>
  )

  renderFail = () => (
    <div className="bg-container">
      {this.renderCommon()}
      <div className="fail-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure view"
          className="fail-img"
        />
        <h1 className="heading"> Something Went Wrong </h1>
      </div>
    </div>
  )

  renderSuccess = () => {
    const {dataObj} = this.state
    return (
      <div className="bg-container">
        {this.renderCommon()}
        <div>
          <VaccinationCoverage details={dataObj.last_7_days_vaccination} />
          <VaccinationByGender genderData={dataObj.vaccination_by_gender} />
          <VaccinationByAge ageData={dataObj.vaccination_by_age} />
        </div>
      </div>
    )
  }

  render() {
    const {apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccess()
      case apiStatusConstants.fail:
        return this.renderFail()
      case apiStatusConstants.inProgress:
        return this.renderInprogress()
      default:
        return null
    }
  }
}

export default CowinDashboard
