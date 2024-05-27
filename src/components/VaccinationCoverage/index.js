import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {details} = props
  const DataFormatter = numberVal => `${(numberVal * 1000).toString()}k`
  return (
    <div className="container">
      <h1 className="heading-2"> Vaccination Coverage </h1>
      <ResponsiveContainer width={1000} height={300}>
        <BarChart
          data={details}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vaccine_date"
            tick={{
              color: '#6c757d',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              color: '#6c757d',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose_1" name="Dose 1" fill="#5a8dee" barSize="20%" />
          <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
