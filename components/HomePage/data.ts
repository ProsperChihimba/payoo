const icons = [
    {
        id: 1,
        iconType: 'Ionicons',
        iconName: 'ios-rocket',
        iconSize: 24,
        iconColor: '#32a7e2',
        backgroundColor: '#c7e1ee',
        title: 'Transfer',
        navigationName: 'SendMoney',
    },
    {
        id: 2,
        iconType: 'Ionicons',
        iconName: 'ios-phone-portrait-outline',
        iconSize: 22,
        iconColor: '#b548c6',
        backgroundColor: '#f1dcf5',
        title: 'Airtime',
        navigationName: 'Airtime',
    },
    {
        id: 3,
        iconType: 'Ionicons',
        iconName: 'wallet',
        iconSize: 21,
        iconColor: '#ff8700',
        backgroundColor: '#f6e0c7',
        title: 'Bill',
        navigationName: 'SendMoney',
    },
    {
        id: 4,
        iconType: 'Entypo',
        iconName: 'grid',
        iconSize: 24,
        iconColor: '#22b07d',
        backgroundColor: '#c9efe1',
        title: 'More',
        navigationName: 'SendMoney',
    }
]

const transactions = [
    {
        id: 1,
        spendType: 'Sister noa',
        date: '9 Nov, 2021',
        amount: 'Tsh 340000',
        iconName: 'arrow-up-right',
        iconColor: '#22b07d',
        from: 'Emirates',
    },
    {
        id: 2,
        spendType: 'Annie',
        date: '10 Nov, 2021',
        amount: 'Tsh 50000',
        iconName: 'arrow-up-right',
        iconColor: '#22b07d',
        from: 'M-Pesa',
    },
    {
        id: 3,
        spendType: 'young bro',
        date: '19 Nov, 2021',
        amount: 'Tsh 5000',
        iconName: 'arrow-up-right',
        iconColor: '#22b07d',
        from: 'M-Pesa',
    },
    {
        id: 4,
        spendType: 'Gym day',
        date: '9 Nov, 2021',
        amount: 'Tsh 3000',
        iconName: 'arrow-up-right',
        iconColor: '#22b07d',
        from: 'Mall',
    },
    {
        id: 5,
        spendType: 'Shoes',
        date: '10 Nov, 2021',
        amount: '50000',
        iconName: 'arrow-up-right',
        iconColor: '#22b07d',
        from: 'Mall',
    },
]

const appdata = {
    icons: icons,
    transactions: transactions
}

export default appdata;