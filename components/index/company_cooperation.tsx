
import CompanyCooperationItem from './company_cooperation_item'
import { company_cooperation } from '../../mock/index/data'

export default function CompanyCooperation() {
  return <>
    {company_cooperation.map((item, index) => <CompanyCooperationItem key={index} data={item} num={index} />)}
  </>
}