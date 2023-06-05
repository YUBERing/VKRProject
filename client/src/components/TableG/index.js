import React from 'react';
import './style.scss'

const TableG = (props) => {
    const {
        list
    } = props

    const getHeader = () => {
        return list.map((item, i) => {
            return (
                <th className={'table__header'} key={i}>
                    {item[0]}
                </th>
            )
        })
    }

    const getValues = () => {
        return list.map((item, i) => {
            return (
                <td className={'table__cell'} key={i}>
                    {item[1]}
                </td>
            )
        })
    }

    return (
        <table className={'table'}>
            {list &&
                <tr className={'table__line'}>
                    {getHeader()}
                </tr>
            }
            {list &&
                <tr className={'table__line'}>
                    {getValues()}
                </tr>
            }
        </table>
    );
};

export default TableG;