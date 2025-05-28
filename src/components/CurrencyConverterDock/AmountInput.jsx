function AmountInput({ label, value, onChange}) {
    return (
        <div>
            <label className="block text-start mb-2">
                {label}
            </label>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter amount..."
                min={0}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-700"
            />
        </div>
    );
}

export default AmountInput;