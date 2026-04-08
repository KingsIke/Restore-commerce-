export const formatCurrency = (amount: number) => {
    return `$${(amount / 100).toFixed(2)}`;
}