package capprezy.ua.controller.exception;

public class PermissionException extends Exception {
    String reason;

    public static PermissionException createWith(String reason) {
        return new PermissionException(reason);
    }
    private PermissionException(String reason) {
        this.reason = reason;
    }

    @Override
    public String getMessage() {
        return "Permission denied: '" + reason + "'";
    }
}