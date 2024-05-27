import {PieChart, Pie, Cell, ResponsiveContainer, Legend} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {genderData} = props
  return (
    <div className="container">
      <h1 className="heading-2"> Vaccination by gender </h1>
      <ResponsiveContainer width={1000} height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="70%"
            data={genderData}
            startAngle={0}
            endAngle={180}
            innerRadius="30%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
