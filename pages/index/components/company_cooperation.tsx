import CompanyCooperationItem from './company_cooperation_item'

const data = [{
  img: '/image/home/company_cooperation/1.png',
  signature: '— Gareth L., ABC Company, China',
  detail: 'Our company highly value global perspectives in our employees, and we want to thank myUni for offering affordable online degree courses to our talents.'
}, {
  img: '/image/home/company_cooperation/2.png',
  signature: '— David M., CDE Company, China',
  detail: "Our talents are our biggest assets and we must invest in developing our talents. We trust myUni's degree courses as our employees can access global knowledge and resources while working full time for us. Awesome."
}, {
  img: '/image/home/company_cooperation/3.png',
  signature: '— Julie H., XYZ Company, China',
  detail: "Providing online degrees for our employees is a great idea as it helps to improve our workforce's competitiveness. We have faith that the online degrees courses from top universities will enhance our company's advantage."
}]

export default function CompanyCooperation() {
  return <>
    {data.map((item, index) => <CompanyCooperationItem key={index} data={item} num={index} />)}
  </>
}