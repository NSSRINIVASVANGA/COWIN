import {PieChart, Pie, Cell, ResponsiveContainer, Legend} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {ageData} = props
  return (
    <div className="container">
      <h1 className="heading-2"> Vaccination by age </h1>
      <ResponsiveContainer width={1000} height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={ageData}
            startAngle={0}
            endAngle={360}
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
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

export default VaccinationByAge
