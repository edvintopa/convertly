function DropDownSelector({ label, value, onChange, options }) {
    return (
        <div>
            <label className="block text-start mb-2">
                {label}
            </label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-700"
            >
                {options.map((option) => (
                    <option key={option.code} value={option.code}>
                        {option.name} ({option.code})
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropDownSelector;