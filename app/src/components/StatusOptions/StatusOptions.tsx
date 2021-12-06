import { EStatusType } from "../../types/AccountsTable.props";
import enumToArray from "../../utils/enumToArray";

const StatusOptions = (): JSX.Element => (
  <>
    {enumToArray(EStatusType).sort().map((status, key) => (
      <option value={status} key={key}>
        {status}
      </option>
    ))}
  </>
);

export default StatusOptions;
