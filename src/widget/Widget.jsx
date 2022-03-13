import React from 'react';
import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIocn from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlined  from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({type}) => {
    let data;
    
    //Temporary
    const amount= 100;
    const diff = 20;
    
    switch(type){
        case "users":
            data= {
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:(
                    <PersonOutlinedIcon className='icon' style={{
                        color: "crimson",
                        backgroundColor: "rgba(255,0,0,0.2)"
                    }} />
                )
            }
            break;
            case "orders":
                data= {
                    title:"ORDERS",
                    isMoney:true,
                    link:"View all orders",
                    icon:(
                        <ShoppingCartOutlinedIocn className='icon' style={{
                            color: "goldenrod",
                            backgroundColor: "rgba(218,165,32,0.2)"
                        }}  />
                    )
                }
                break;
                case "earning":
                    data= {
                        title:"ERANINGS",
                        isMoney:true,
                        link:"View net earnings",
                        icon:(
                            <MonetizationOnOutlined className='icon' style={{
                                color: "green",
                                backgroundColor: "rgba(0,128,0, 0.2)"
                            }}  />
                        )
                    }
                    break;
                    case "balance":
                        data= {
                            title:"BALANCE",
                            isMoney:true,
                            link:"See details",
                            icon:(
                                <AccountBalanceWalletOutlinedIcon className='icon' style={{
                                    color: "purple",
                                    backgroundColor: "rgba(128,0,128,0.2)"
                                }} />
                            )
                        }
                        break;
        default:
            break;
    }

  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
                {data.isMoney && "$"} {amount}
                </span>
            <div className="link">{data.link}</div>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget