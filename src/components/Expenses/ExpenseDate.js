import './ExpenseDate.css';

function ExpenseDate(props) {
    const date = {
        month: props.date.toLocaleString('en-us', { month: 'long' }),
        day: props.date.toLocaleString('en-us', { day: '2-digit' }),
        year: props.date.getFullYear(),
    };

    return (
        <div className="expense-date">
            <div className="expense-date__day">{date.day}</div>
            <div className="expense-date__month">{date.month}</div>
            <div className="expense-date__year">{date.year}</div>
        </div>
    );
}

export default ExpenseDate;
