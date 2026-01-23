import { PaymentDetails, PaymentResponse } from '../types/paymentTypes';

/**
 * PaymentService class to handle payment processing and validation.
 */
export class PaymentService {
    /**
     * Validates the payment details.
     * @param paymentDetails - The details of the payment to validate.
     * @returns A boolean indicating whether the payment details are valid.
     */
    public validatePaymentDetails(paymentDetails: PaymentDetails): boolean {
        const { amount, currency, cardNumber, expirationDate, cvv } = paymentDetails;

        // Basic validation checks
        if (amount <= 0) {
            console.error('Invalid amount');
            return false;
        }
        if (!currency || currency.length !== 3) {
            console.error('Invalid currency');
            return false;
        }
        if (!this.validateCardNumber(cardNumber)) {
            console.error('Invalid card number');
            return false;
        }
        if (!this.validateExpirationDate(expirationDate)) {
            console.error('Invalid expiration date');
            return false;
        }
        if (!this.validateCVV(cvv)) {
            console.error('Invalid CVV');
            return false;
        }

        return true;
    }

    /**
     * Processes the payment.
     * @param paymentDetails - The details of the payment to process.
     * @returns A promise that resolves to a PaymentResponse.
     */
    public async processPayment(paymentDetails: PaymentDetails): Promise<PaymentResponse> {
        if (!this.validatePaymentDetails(paymentDetails)) {
            throw new Error('Invalid payment details');
        }

        // Simulate payment processing
        return new Promise<PaymentResponse>((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    transactionId: '1234567890',
                    message: 'Payment processed successfully',
                });
            }, 2000);
        });
    }

    private validateCardNumber(cardNumber: string): boolean {
        // Simple Luhn algorithm check for card number validity
        const regex = new RegExp(/^\d{16}$/);
        return regex.test(cardNumber);
    }

    private validateExpirationDate(expirationDate: string): boolean {
        const [month, year] = expirationDate.split('/').map(Number);
        const now = new Date();
        const currentMonth = now.getMonth() + 1; // Months are 0-based
        const currentYear = now.getFullYear() % 100; // Get last two digits of year

        return (year > currentYear) || (year === currentYear && month >= currentMonth);
    }

    private validateCVV(cvv: string): boolean {
        const regex = new RegExp(/^\d{3,4}$/);
        return regex.test(cvv);
    }
}