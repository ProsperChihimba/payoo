const icons = [
    {
        id: 1,
        iconType: 'Ionicons',
        iconName: 'send',
        iconSize: 24,
        iconColor: 'white',
        backgroundColor: '#32a7e2',
        title: 'Transfer'
    },
    {
        id: 2,
        iconType: 'Ionicons',
        iconName: 'download',
        iconSize: 22,
        iconColor: 'white',
        backgroundColor: '#b548c6',
        title: 'Top-up'
    },
    {
        id: 3,
        iconType: 'Ionicons',
        iconName: 'wallet',
        iconSize: 21,
        iconColor: 'white',
        backgroundColor: '#ff8700',
        title: 'Bill'
    },
    {
        id: 4,
        iconType: 'Entypo',
        iconName: 'grid',
        iconSize: 24,
        iconColor: 'white',
        backgroundColor: '#22b07d',
        title: 'More'
    }
]

const transactions = [
    {
        id: 1,
        spendType: 'To USA',
        date: 'Nov 9',
        amount: '3400000.00',
        iconName: 'airplane',
        iconColor: '#22b07d',
        from: 'Emirates',
    },
    {
        id: 2,
        spendType: 'Bando',
        date: 'Nov 10',
        amount: '5000.00',
        iconName: 'phone-portrait',
        iconColor: '#22b07d',
        from: 'M-Pesa',
    },
    {
        id: 3,
        spendType: 'Repair',
        date: 'Nov 19',
        amount: '50000.00',
        iconName: 'laptop',
        iconColor: '#22b07d',
        from: 'M-Pesa',
    },
    {
        id: 4,
        spendType: 'Gym',
        date: 'Nov 19',
        amount: '7000.00',
        iconName: 'barbell-sharp',
        iconColor: '#22b07d',
        from: 'Mall',
    },
    {
        id: 5,
        spendType: 'Shoes',
        date: 'Nov 19',
        amount: '50000.00',
        iconName: 'man-outline',
        iconColor: '#22b07d',
        from: 'Mall',
    },
]

const appdata = {
    icons: icons,
    transactions: transactions
}

export default appdata;